import { Grid } from "@mui/material"
import { classes } from "@/data"

import ClassCard from "@/components/ClassCard"
import PageTitle from "@/components/PageTitle"
import SearchBar from "@/components/SearchBar"

function ClassesPage() {
    return (
        <>
            <PageTitle title="My Classes" tag="Explore Your Classes Today!" />
            <SearchBar />
            <Grid container spacing={3}>
                {
                    classes.map((item, index) => (
                        <Grid key={index} item xs={12} lg={6}>
                            <ClassCard
                                key={index}
                                item={item}
                            />
                        </Grid>
                    ))
                }

            </Grid>
            
        </>
    )
}

export default ClassesPage