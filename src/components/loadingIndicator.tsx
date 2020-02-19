import React from "react"

import { Box, CircularProgress } from "@material-ui/core"

const LoadingIndicator: React.FC<{}> = () => (
    <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size={40} />
    </Box>
)

export default LoadingIndicator
