import { useTheme } from "@emotion/react"
import { Typography } from "@mui/material"
import { MyTheme } from "@/theme"

function PageTitle({ title, tag }: { title: string, tag?: string }) {
    const theme = useTheme() as MyTheme
    return (
        <>
            <Typography
                variant="h6"
                color={theme.palette.primary.main || '#ccc'}
                sx={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    mb: tag ? 0 : '1rem',
                    pb: tag ? 0 : '0.5rem',
                    // borderBottom: '1px solid',
                    // borderColor: theme.palette.secondary.main || '#ccc'
                }}
            >{title}</Typography>
            {
                tag && <Typography
                    sx={{
                        fontSize: '0.8rem',
                        color: theme.palette.text.secondary || '#ccc',
                        pb: '0.5rem',
                        mb: '1rem',
                    }}
                >{tag}</Typography>
            }
        </>
    )
}

export default PageTitle