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
import UserRating from './UserRating';


function ResourceInformation({ resourceId }) {
    console.log(resourceId);
    const { loading, data, error } = useOperation('getResource', resourceId);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const average = () => {
        let ave = data.average_evaluation
        if ( ave ) {
            return parseFloat(ave.slice(0, 3))
        }
        else{
            return 0
        }
    }
    // let average = parseFloat(data.average_evaluation.slice(0, 3))
    return (
        <Card>
            <CardContent>
                <div>
                    <Typography variant="h5" component="div">
                        {data.name}
                    </Typography>
                </div>

                <div>
                    <div>
                        <Rating
                            id="resource-average"
                            name="read-only"
                            value={average()}
                            precision={0.1} readOnly
                        />
                    </div>

                    <div>
                        <Chip label={average()} variant="outlined" />
                    </div>
                </div>

                <div>
                    <CardActions>
                        <Button href={data.url} target="_blank" variant="outlined"> Ver recurso </Button>
                    </CardActions>
                </div>

                <div>
                    <div>
                        Your evaluation:
                    </div>

                    <div>
                        <UserRating resourceId={resourceId}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}
export default ResourceInformation;
