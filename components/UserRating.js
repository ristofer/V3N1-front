import { useOperation } from 'react-openapi-client';
import Rating from '@mui/material/Rating';

function UserRating({ resourceId }) {
    console.log(resourceId);
    const { loading, data, error } = useOperation('getResourceEvaluation', resourceId);
    console.log(data)
    
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Rating
            name="simple-controlled"
            value={ data.evaluation }
            onChange={(event, newValue) => {
                console.log(newValue);
            }} />
    )

}
export default UserRating;
