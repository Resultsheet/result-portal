import { Search } from "@mui/icons-material"
import { Box, FormControl, IconButton, InputAdornment, TextField, useMediaQuery, useTheme } from "@mui/material"

function SearchBar() {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <Box sx={{
                mb: 4
            }}>
                <FormControl
                    fullWidth={isMobile}
                >
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        size="small"
                        variant="outlined"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" color="primary">
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}

                    />
                </FormControl>
            </Box>
        </>
    )
}

export default SearchBar