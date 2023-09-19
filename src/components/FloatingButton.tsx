import { FloatingButtonPropsType } from "@/types/floatingButton"
import { Add } from "@mui/icons-material"
import { Box, Fab, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useEffect, useState } from "react"

function FloatingButton({ onClick, icon, content = null, color = "primary" }: FloatingButtonPropsType) {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const [topValue, setTopValue] = useState<number>(90)

    useEffect(() => {

        if (!isMobile) {
            const appBarHeight = theme.mixins.toolbar.minHeight
            if (appBarHeight) setTopValue(parseFloat(appBarHeight as string) + 30)
        }
    }, [isMobile, theme.mixins.toolbar.minHeight])


    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: isMobile ? '2rem' : undefined,
                    top: isMobile ? undefined : topValue,
                    right: '1rem',
                }}
            >
                <Fab variant={content ? 'extended' : undefined}
                    onClick={onClick}
                    color={color as never}>
                    {
                        icon ? icon : <Add />
                    }
                    {
                        content && <Typography sx={{ ml: 1 }}
                        >{content}</Typography>
                    }
                </Fab>
            </Box>

        </>
    )
}

export default FloatingButton