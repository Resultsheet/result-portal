import ClassCard from "@/components/ClassCard"
import { classes } from "@/data"
import { Box, Typography } from "@mui/material"

function ClassesPage() {
    return (
        <>
            <Typography
                variant="h6"
                className="page-title"
            >My Classes</Typography>
            <Box>
                {
                    classes.map((item, index) => (
                        <ClassCard
                            key={index}
                            item={item}
                        />
                    ))
                }

            </Box>
        </>
    )
}

export default ClassesPage