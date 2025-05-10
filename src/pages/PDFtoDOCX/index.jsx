import { useState } from 'react';
import { saveAs } from 'file-saver';
import { FileUploader } from '../../components/FileUploader';
import { ConversionProgress } from '../../components/ConversionProgress';
import { convertPDFtoDOCX, convertDOCXtoPDF } from '../../utils/fileConverter';
import { StyledContainer, Title, Description } from '../../assets/style/styles';

export const PDFtoDOCX = () => {
    const [isConverting, setIsConverting] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileUpload = async (file) => {
        try {
            setIsConverting(true);
            setProgress(0);
            
            // Determine file type and convert accordingly
            const isDocx = file.name.toLowerCase().endsWith('.docx');
            
            // Progress simulation
            const interval = setInterval(() => {
                setProgress(prev => Math.min(prev + 10, 90));
            }, 500);

            // Convert file
            const convertedFile = isDocx 
                ? await convertDOCXtoPDF(file)
                : await convertPDFtoDOCX(file);

            clearInterval(interval);
            setProgress(100);

            // Trigger download
            const fileName = file.name.replace(
                isDocx ? '.docx' : '.pdf',
                isDocx ? '.pdf' : '.docx'
            );
            saveAs(convertedFile, fileName);

        } catch (error) {
            console.error('Conversion failed:', error);
            // Handle error appropriately
        } finally {
            setIsConverting(false);
            setProgress(0);
        }
    };

    return (
        <StyledContainer>
            <Title>PDF ⇄ DOCX Converter</Title>
            <Description>
                Convert your documents between PDF and DOCX formats easily and securely
            </Description>

            {isConverting ? (
                <ConversionProgress progress={progress} />
            ) : (
                <FileUploader 
                    onFileUpload={handleFileUpload}
                    acceptedFiles={['.pdf', '.docx']}
                />
            )}
        </StyledContainer>
    );
};