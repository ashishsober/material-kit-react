import * as React from 'react'
import Scrollbar from '../../../components/scrollbar';
import Logo from '../../../components/logo';
import { Box } from '@mui/material';
import renderAccount from './render-account';
import renderMenu from './render-menu';
import renderUpgrade from './render-upgrade';

export default function renderContent(props:any) {
    return (
        <div>
            <Scrollbar
                sx={{
                    height: 1,
                    backgroundColor: "black",
                    '& .simplebar-content': {
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column'
                    },
                }}
            >
                <Logo sx={{ mt: 3, ml: 4 }} disabledLink={false} />

                {renderAccount}

                {renderMenu}

                <Box sx={{ flexGrow: 1 }} />

                {renderUpgrade}
            </Scrollbar>
        </div>
    )
}
