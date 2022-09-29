import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useOperation } from 'react-openapi-client';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip'
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Resource() {
    const { loading, data, error } = useOperation('getResource', 1);
    const { loadingEvaluation, evaluationData, evaluationError } = useOperation('getResource', 1);
    
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    let a = data;
    let average = parseFloat(data.average_evaluation.slice(0, 3))
    return (
        <>
        <main className={styles.main}>
            <Card>
                <CardContent>
                    <div>
                        <Typography variant="h5" component="div">
                            { a.name }
                        </Typography>
                    </div>

                    <div>
                        <div>
                            <Rating
                            id="resource-average"
                            name="read-only"
                            value={ average } 
                            precision={0.1} readOnly
                            />
                        </div>

                        <div>
                            <Chip label={ average } variant="outlined" />
                        </div>
                    </div>

                    <div>
                        <CardActions>
                            <Button href={ a.url } target="_blank" variant="outlined"> Ver recurso </Button>
                        </CardActions>
                    </div>

                    <div>
                        <div>
                            Your evaluation:
                        </div>

                        <div>
                            <Rating
                            name="simple-controlled"
                            onChange={(event, newValue) => {
                                console.log(newValue);
                            }}/>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main></>
        )
    
}
