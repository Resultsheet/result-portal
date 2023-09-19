import { classCardPropsType } from "@/types/classCard"
import { Box, Typography } from "@mui/material"

function ClassCard({ item }: classCardPropsType) {
    return (
        <>
            <Box key={item.id} sx={{ mb: 2 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography >{item.mode}</Typography>
                <Typography >{item.type}</Typography>
                <Typography >{item.day}</Typography>
                <Typography >{item.from_time}</Typography>
                <Typography >{item.to_time}</Typography>
                <Typography >{item.location}</Typography>
                <Box>
                    {
                        item.subjects.map((sub, index) => (
                            <Box key={index}>
                                <Typography>English {sub}</Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default ClassCard