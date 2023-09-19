import { classCardPropsType } from "@/types/classCard"
import { Box, Typography, useTheme } from "@mui/material"


function ClassCard({ item }: classCardPropsType) {

    const theme = useTheme()

    return (
        <>
            <Box key={item.id} className="flex-col flex-gap-4" sx={{
                padding: '1rem',
                backgroundColor: theme.palette.background.paper,
                borderRadius: '0.5rem',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
                    border: '1px solid #ccc',
                    borderColor: theme.palette.primary.main,
                    cursor: 'pointer'
                }
            }}>
                <Box className="flex-row-between">
                    <Box className="flex-row">
                        <Box
                            sx={{
                                px: 2,
                                py: '0.3rem',
                                borderRadius: 4,
                                color: '#fff',
                                backgroundColor: theme.palette.secondary.main
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '0.8rem'
                                }}
                            >Grade {item.grade}</Typography>
                        </Box>
                        <Box
                            sx={{
                                px: 2,
                                py: '0.3rem',
                                borderRadius: 4,
                                color: '#fff',
                                backgroundColor: theme.palette.secondary.main
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '0.8rem',
                                    // textTransform: 'capitalize',
                                }}
                            >{item.type}</Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            px: 2,
                            py: '0.3rem',
                            borderRadius: 4,
                            color: '#fff',
                            textTransform: 'capitalize',
                            backgroundColor: item.mode == 'ONLINE' ? theme.palette.success.main : theme.palette.warning.main
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '0.8rem'
                            }}
                        >{item.mode}</Typography>
                    </Box>
                </Box>

                <Typography variant="h6"
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        marginTop: '0.5rem',
                        wordBreak: 'break-word'
                    }}
                    color="primary"
                >{item.name}</Typography>


                <Box className="flex-row-between-end">
                    <Box>
                        <Typography
                            sx={{ fontWeight: '500', fontSize: '0.9rem' }}
                        >{item.day}</Typography>
                        <Box className="flex-row">
                            <Typography
                                sx={{
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                }}
                                color='primary.light'
                            >{item.from_time}</Typography>
                            <Typography
                                color='primary.light'
                            >|</Typography>

                            <Typography
                                sx={{
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                }}
                                color='primary.light'
                            >{item.to_time}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '0.8rem',
                            }}
                            color={theme.palette.text.secondary || '#ccc'}
                        > Location</Typography>
                        <Typography
                            sx={{
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                maxWidth: '7rem',
                                wordBreak: 'break-word'
                            }}
                        > {item.location}</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontSize: '0.8rem',
                            color: theme.palette.text.secondary || '#ccc'
                        }}
                    > Subjects</Typography>
                    <Box className="flex-row-wrap">
                        {
                            item.subjects.map((sub: string, index: number) => (
                                <Box key={index}>
                                    <Typography
                                        sx={{
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            '&:after': {
                                                content: '"|"',
                                                pl: '0.5rem',
                                                color: theme.palette.primary.light || '#ccc'
                                            }
                                        }}
                                    >English {sub}</Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box >
        </>
    )
}

export default ClassCard