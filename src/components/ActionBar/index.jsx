import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveAs } from 'file-saver';
import { 
    FaFileWord, 
    FaFilePdf, 
    FaFileAlt,
    FaDownload,
    FaFileCode,
    FaFileCsv 
} from 'react-icons/fa';
import { 
    FABContainer,
    MainButton,
    MenuContainer,
    MenuItem,
    IconWrapper2,
    ButtonLabel
} from '../../assets/style/styles';

export const ActionBar = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const formats = [
        { icon: FaFilePdf, label: 'PDF', format: 'pdf' },
        { icon: FaFileWord, label: 'DOCX', format: 'docx' },
        { icon: FaFileAlt, label: 'TEXT', format: 'txt' },
        { icon: FaFileCode, label: 'MARKDOWN', format: 'md' },
        { icon: FaFileCsv, label: 'CSV', format: 'csv' }
    ];

    const handleDownload = async (format) => {
        setIsOpen(false);
        // Replace with your actual conversion API endpoints
        const response = await fetch(`/api/convert-to-${format}`, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const blob = await response.blob();
        saveAs(blob, `extracted-text.${format}`);
    };

    return (
        <FABContainer>
            <AnimatePresence>
                {isOpen && (
                    <MenuContainer
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        {formats.map((item, index) => (
                            <MenuItem
                                key={item.format}
                                onClick={() => handleDownload(item.format)}
                                custom={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <IconWrapper2>
                                    <item.icon />
                                </IconWrapper2>
                                <ButtonLabel>{item.label}</ButtonLabel>
                            </MenuItem>
                        ))}
                    </MenuContainer>
                )}
            </AnimatePresence>
            
            <MainButton
                onClick={() => setIsOpen(!isOpen)}
                animate={{ 
                    rotate: isOpen ? 45 : 0,
                    backgroundColor: isOpen ? '#e74c3c' : '#2ECC71'
                }}
            >
                <FaDownload />
            </MainButton>
        </FABContainer>
    );
};