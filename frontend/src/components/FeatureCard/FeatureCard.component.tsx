import { Box, Typography } from '@mui/material';

import { FeatureCardProps } from './FeatureCard.types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  featureText,
  Icon,
  backgroundColor,
}) => {
  return (
    <Box
      padding="40px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      gap="20px"
      color="white"
      fontWeight="bold"
      borderRadius="24px"
      sx={{
        background: backgroundColor,
      }}
    >
      <Icon fontSize="large" />
      <Typography fontWeight="bold" fontSize="2rem">
        {featureText}
      </Typography>
    </Box>
  );
};

export default FeatureCard;
