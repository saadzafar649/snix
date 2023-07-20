import { Card, CardContent, Typography } from '@mui/material'; // Import from @mui/material

const OrderItem = ({ item }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '350px',minWidth: '350px', marginBottom: '10px' }}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          margin: '20px',
        }}
      />
      <CardContent>
        <div>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body1">Price: ${item.price}</Typography>
          <Typography variant="body1">Quantity: {item.count}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
