import { Box, useTheme } from "@mui/material"
import '@/scss/loading.scss'

function Loading() {
    const theme = useTheme()
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '0.5rem',
                    // border: '2px dashed #ccc',
                    // borderColor: theme.palette.primary.main,
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                <div style={{
                    position: 'relative',
                }}><span className="loader"></span></div>
            </Box>
        </>
    )
}

export default Loading