import { useState } from 'react';
import { FileUploader } from '../../components/FileUploader';
import { TextEditor } from '../../components/TextEditor';
import { ActionBar } from '../../components/ActionBar';
import { ExtractingLoader } from '../../components/ConversionProgress';
import { StyledContainer, Title, Description } from '../../assets/style/styles';
import { ImageUploader } from '../../components/FileUploader';

export const ImagetoDocx = () => {
    const [extractedText, setExtractedText] = useState('');
    const [isExtracting, setIsExtracting] = useState(false);
    const [showEditor, setShowEditor] = useState(true);

    const handleImageUpload = async (file) => {
        try {
            setIsExtracting(true);
            // API call to backend for text extraction
            // Replace with your actual API endpoint
            const formData = new FormData();
            formData.append('image', file);
            
            const response = await fetch('/api/extract-text', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            setExtractedText(data.text);
            setShowEditor(true);
        } catch (error) {
            console.error('Text extraction failed:', error);
        } finally {
            setIsExtracting(false);
        }
    };

    return (
        <StyledContainer>
            <Title>Extract Text from Image</Title>
            <Description>
                Extract text from images and convert to various document formats
            </Description>

            {!showEditor && !isExtracting && (
                <ImageUploader onFileUpload={handleImageUpload} />
            )}

            {isExtracting && (
                <ExtractingLoader />
            )}

            {showEditor && (
                <>
                    <ActionBar text={extractedText} />
                    <TextEditor 
                        text={extractedText} 
                        onChange={setExtractedText} 
                    />
                </>
            )}

        </StyledContainer>
    );
};