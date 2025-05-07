"use client"

import { useEffect, useRef, useState } from "react"
import "ol/ol.css"
import Map from "ol/Map"
import View from "ol/View"
import TileLayer from "ol/layer/Tile"
import XYZ from "ol/source/XYZ"
import { fromLonLat } from "ol/proj"
import { Feature } from "ol"
import Point from "ol/geom/Point"
import VectorSource from "ol/source/Vector"
import VectorLayer from "ol/layer/Vector"
import { Icon, Style } from "ol/style"
import Attribution from "ol/control/Attribution"

const WorldMap = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markerLayerRef = useRef(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [locationInfo, setLocationInfo] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])

  // Initialize map on component mount
  useEffect(() => {
    if (!mapInstanceRef.current && mapRef.current) {
      // Create vector source for markers
      const markerSource = new VectorSource()

      // Create vector layer for markers
      const markerLayer = new VectorLayer({
        source: markerSource,
      })

      markerLayerRef.current = markerLayer

      // Use a more reliable tile provider (CartoDB)
      const tileLayer = new TileLayer({
        source: new XYZ({
          url: "https://{a-c}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
          attributions:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          crossOrigin: "anonymous",
          maxZoom: 19,
        }),
      })

      // Create attribution control with proper attribution
      const attribution = new Attribution({
        collapsible: false,
      })

      // Initialize map
      const map = new Map({
        target: mapRef.current,
        layers: [tileLayer, markerLayer],
        view: new View({
          center: fromLonLat([0, 0]),
          zoom: 2,
          maxZoom: 18,
        }),
        controls: [attribution],
      })

      mapInstanceRef.current = map
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.setTarget(undefined)
        mapInstanceRef.current = null
      }
    }
  }, [])

  // Function to add a marker to the map
  const addMarker = (lon, lat, name) => {
    if (!markerLayerRef.current) return

    // Clear existing markers
    markerLayerRef.current.getSource().clear()

    // Create marker feature
    const marker = new Feature({
      geometry: new Point(fromLonLat([lon, lat])),
      name: name,
    })

    // Style the marker
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-red.png",
          scale: 0.5,
        }),
      }),
    )

    // Add marker to the layer
    markerLayerRef.current.getSource().addFeature(marker)

    // Center map on marker
    mapInstanceRef.current.getView().animate({
      center: fromLonLat([lon, lat]),
      zoom: 5,
      duration: 1000,
    })
  }

  // Generate a random route ID (like A42, B09, Z71)
  const generateRouteId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const letter = letters[Math.floor(Math.random() * letters.length)]
    const number = Math.floor(Math.random() * 90) + 10
    return `${letter}${number}`
  }

  // Generate a random price between 10,000 and 50,000
  const generatePrice = () => {
    return Math.floor(Math.random() * 40000) + 10000
  }

  // Function to search for a location
  const searchLocation = async (query) => {
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      // Using Nominatim API for geocoding with proper headers
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1`,
        {
          headers: {
            "User-Agent": "YourAppName/1.0",
            Referer: window.location.href,
          },
        },
      )

      if (!response.ok) {
        throw new Error("Failed to fetch location data")
      }

      const data = await response.json()

      if (data.length > 0) {
        const location = data[0]

        // Extract country, city, and other details
        const address = location.address || {}
        const country = address.country || ""
        const city = address.city || address.town || address.village || address.county || ""
        const state = address.state || ""

        // Create location info object
        const locationData = {
          id: generateRouteId(),
          name: location.display_name,
          country: country,
          city: city,
          state: state,
          lat: Number.parseFloat(location.lat),
          lon: Number.parseFloat(location.lon),
          price: generatePrice(),
          originTerminal: `${city} Terminal, ${state || country}`,
          destinationTerminal: `Central Station, ${city}`,
        }

        setLocationInfo(locationData)

        // Add to recent searches if not already there
        setRecentSearches((prev) => {
          const exists = prev.some((item) => item.id === locationData.id)
          if (exists) return prev
          return [locationData, ...prev].slice(0, 3) // Keep only the 3 most recent
        })

        addMarker(locationData.lon, locationData.lat, locationData.name)
      } else {
        setError("Location not found. Please try a different search term.")
      }
    } catch (err) {
      setError(err.message || "An error occurred while searching for the location")
    } finally {
      setIsLoading(false)
    }
  }

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    searchLocation(searchQuery)
  }

  // Format price with currency symbol
  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4">
      {/* Search Bar */}
     <div className="lg:bg-white rounded-lg shadow-md overflow-hidden mb-4 w-full max-w-2xl mx-auto">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col sm:flex-row sm:items-center lg:gap-2 p-3"
  >
    <div className="flex items-center lg:bg-white lg:border lg:border-gray-300 rounded-md px-3 py-2 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 mr-2 hidden lg:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search cities or destinations..."
        className="flex-grow outline-none text-gray-700 border-0"
        disabled={isLoading}
      />
    </div>

    <button
      type="submit"
      className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors disabled:bg-teal-300 w-full sm:w-auto"
      disabled={isLoading}
    >
      {isLoading ? "Searching..." : "Search"}
    </button>
  </form>
</div>


      {error && (
        <div className="p-3 mb-4 bg-red-100 border border-red-200 text-red-700 text-sm rounded-md">
          {error}
        </div>
      )}

      {/* Map Container */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 mt-10">
        <div ref={mapRef} className="w-full h-[400px]" />
      </div>

      {/* Location Information */}
      {(locationInfo || recentSearches.length > 0) && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-800 uppercase tracking-wider">
              NEARBY ROUTES
            </h2>
          </div>

          <div className="divide-y divide-gray-200">
            {locationInfo && (
              <div className="p-4 flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-800 font-bold mr-4">
                  {locationInfo.id}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-900">
                      {locationInfo.city || locationInfo.state} -{" "}
                      {locationInfo.country} Route
                    </h3>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-900 mr-2">
                        {formatPrice(locationInfo.price)}
                      </span>
                      <button className="text-gray-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct Connection • Travel time:{" "}
                    {Math.floor(Math.random() * 10) + 2} hrs
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">
                          {locationInfo.originTerminal}
                        </p>
                        <p className="text-xs text-gray-500">07:30</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">
                          {locationInfo.destinationTerminal}
                        </p>
                        <p className="text-xs text-gray-500">15:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {recentSearches
              .filter((item) => !locationInfo || item.id !== locationInfo.id)
              .map((item) => (
                <div key={item.id} className="p-4 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-800 font-bold mr-4">
                    {item.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-900">
                        {item.city || item.state} - {item.country} Route
                      </h3>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-900 mr-2">
                          {formatPrice(item.price)}
                        </span>
                        <button className="text-gray-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Direct Connection • Travel time:{" "}
                      {Math.floor(Math.random() * 10) + 2} hrs
                    </p>

                    <div className="mt-3 space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                        <div>
                          <p className="text-sm font-medium">
                            {item.originTerminal}
                          </p>
                          <p className="text-xs text-gray-500">07:30</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                        <div>
                          <p className="text-sm font-medium">
                            {item.destinationTerminal}
                          </p>
                          <p className="text-xs text-gray-500">15:45</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WorldMap
