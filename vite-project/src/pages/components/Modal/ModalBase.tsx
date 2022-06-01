import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalButton from './ModalButton';
import { modalStyles } from './ModalStyles';

const ModalBase = ({ open, onClose, title, subTitle, content, onSubmit }) => {

    return (
        <Modal open={open} onClose={onClose} >
            <Box sx={modalStyles.wrapper}>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box sx={modalStyles.buttons}>
                    <ModalButton
                        variant="contained"
                        onClick={onSubmit}
                    >
                        Submit
                    </ModalButton>
                    <ModalButton onClick={onClose}>Cancel</ModalButton>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalBase
