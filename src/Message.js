import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";


//Dit keer material-UI gebruiken voor de styling

function Message(props) {
    return (
            <Card>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {props.username}: {props.text}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Message;
