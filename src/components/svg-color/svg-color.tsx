import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import * as React from 'react';

// ----------------------------------------------------------------------

const SvgColor = forwardRef(({ color, src, sx, ...other }: { color: any, src: string, sx: any }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

// SvgColor.propTypes = {
//   src: PropTypes.string,
//   sx: PropTypes.object,
// };

export default SvgColor;
