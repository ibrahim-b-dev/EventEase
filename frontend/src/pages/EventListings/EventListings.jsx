import { useEffect, useState } from "react"
import { Section, Button, Grid } from "../../styles/styled"
import EventCard from "../../components/EventCard"
import {
  SearchContainer,
  SearchInput,
  FilterContainer,
  Select,
} from "./EventListings.styled"
import { getEventsMetadata, getPopularEvents } from "../../services/popular"

const formatDateTime = (dateTime) => {
  if (!dateTime) return ""
  const date = new Date(dateTime)
  return !isNaN(date) ? date.toISOString().split("T")[0] : ""
}

const EventListings = () => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [metadata, setMetadata] = useState({
    locations: [],
    dates: [],
    categories: [],
  })
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [dateFilter, setDateFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const meta = await getEventsMetadata()
        setMetadata(meta)
      } catch (error) {
        setError(error)
      }
    }

    fetchMetaData()
  }, [])

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const events = await getPopularEvents()
        setEvents(events)
      } catch (error) {
        setError(error)
      }
    }

    fetchPopular()
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      const filtered = events.filter((event) => {
        const matchesSearch = event.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        const matchesLocation =
          !locationFilter || event.location.includes(locationFilter)
        const matchesCategory =
          !categoryFilter ||
          event.categories.some((category) =>
            category.toLowerCase().includes(categoryFilter.toLowerCase())
          )

        return matchesSearch && matchesLocation && matchesCategory
      })

      const filteredByDate = filtered.filter((event) => {
        const eventDate = formatDateTime(event.eventDateTime)
        if (!dateFilter || eventDate >= dateFilter) {
          return true
        }
        return false
      })

      console.log(filteredByDate)

      setFilteredEvents(filteredByDate)
    }
  }, [events, searchTerm, locationFilter, dateFilter, categoryFilter])

  return (
    <Section>
      <h1>Discover Events</h1>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary">Search</Button>
      </SearchContainer>
      <FilterContainer>
        <Select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {metadata.locations.length > 0 ? (
            metadata.locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))
          ) : (
            <option disabled>No locations available</option>
          )}
        </Select>
        <Select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">All Dates</option>
          {metadata.dates.length > 0 ? (
            metadata.dates.sort().map((date) => {
              const formattedDate = formatDateTime(date)
              return (
                <option key={formattedDate} value={formattedDate}>
                  {formattedDate}
                </option>
              )
            })
          ) : (
            <option disabled>No dates available</option>
          )}
        </Select>
        <Select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {metadata.categories.length > 0 ? (
            [...new Set(metadata.categories.flat())].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))
          ) : (
            <option disabled>No categories available</option>
          )}
        </Select>
      </FilterContainer>
      <Grid>
        {Array.isArray(filteredEvents) && filteredEvents.length > 0 ? (
          filteredEvents.map((event) => <EventCard key={event.id} {...event} />)
        ) : (
          <p>No events available</p>
        )}
      </Grid>
    </Section>
  )
}

export default EventListings
