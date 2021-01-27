import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext} from '../../contexts/context';

import useStyles from './styles';
import Form from './Form/Form';
import Lists from './Lists/Lists';
function Main() {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    return (
        
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" align="center"/>
            <CardContent>
                <Typography align="center" variant="h6">Net Balance :$ {balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight : '1.5em', marginTop : '20px'}} >


                </Typography>
                <Divider />
                <Form />
            </CardContent>

            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Lists />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
