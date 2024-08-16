import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";

export default function FilteringComponent({ onFilterChange }) {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterApply = () => {
    onFilterChange({ category, minPrice, maxPrice });
  };

  const handleClearFilters = () => {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    onFilterChange({ category: "", minPrice: "", maxPrice: "" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        width: 320,
        padding: 3,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: 3,
        zIndex: 10,
        margin: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 3, textAlign: "center", color: "#131112" }}
      >
        Filter Events
      </Typography>

      <Box sx={{ width: "100%", mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: "#131112" }}>
          <Tooltip title="Filter events by category" arrow>
            <span>Event Category</span>
          </Tooltip>
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: "100%", mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: "#131112" }}>
          <Tooltip title="Filter events by date" arrow>
            <span>Date</span>
          </Tooltip>
        </Typography>
        <TextField fullWidth type="date" InputLabelProps={{ shrink: true }} />
      </Box>

      <Box sx={{ width: "100%", mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: "#131112" }}>
          <Tooltip title="Filter events by price range" arrow>
            <span>Price Range</span>
          </Tooltip>
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            label="Min Price"
            type="number"
            fullWidth
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            InputProps={{ startAdornment: "₹" }}
          />
          <TextField
            label="Max Price"
            type="number"
            fullWidth
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            InputProps={{ startAdornment: "₹" }}
          />
        </Box>
      </Box>

      <Box sx={{ width: "100%", mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: "#131112" }}>
          <Tooltip title="Filter events by location" arrow>
            <span>Location</span>
          </Tooltip>
        </Typography>
        <TextField fullWidth label="Location" variant="outlined" />
      </Box>

      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Chip
          label="Apply Filters"
          onClick={handleFilterApply}
          sx={{
            bgcolor: "#f14b17",
            color: "#fff",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "#d73a13",
            },
          }}
        />
        <Chip
          label="Clear Filters"
          onClick={handleClearFilters}
          sx={{
            bgcolor: "#f2ae01",
            color: "#131112",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "#c89e00",
            },
          }}
        />
      </Box>
    </Box>
  );
}
