import styled from '@emotion/styled';
import { FiUploadCloud } from 'react-icons/fi';
import TextareaAutosize from 'react-textarea-autosize';
import '@fontsource/bricolage-grotesque';
import { motion } from 'framer-motion';

export const StyledContainer = styled.div`
    padding: 24px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
`;

export const Title = styled.h1`
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 2rem;
    color: #1a237e;
    margin-bottom: 1rem;
    font-weight: 600;
`;

export const Description = styled.p`
    color: #666;
    margin-bottom: 2rem;
`;

export const DropzoneContainer = styled.div`
    border: 2px dashed ${props => props.isDragActive ? '#2ECC71' : '#ddd'};
    border-radius: 16px;
    padding: 40px 20px;
    background: ${props => props.isDragActive ? 'rgba(46, 204, 113, 0.1)' : '#f8f9fa'};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: #2ECC71;
        background: rgba(46, 204, 113, 0.05);
    }
`;

export const DropzoneContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #666;
`;

export const UploadIcon = styled(FiUploadCloud)`
    font-size: 48px;
    color: #2ECC71;
    margin-bottom: 8px;
`;

export const AcceptedFormats = styled.p`
    font-size: 0.875rem;
    color: #888;
    margin-top: 8px;
`;


// ...existing code...

export const ProgressContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 8px;
    background-color: #f0f0f0;
    border-radius: 100px;
    overflow: hidden;
    position: relative;
`;

export const ProgressText = styled.p`
    color: #2ECC71;
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
        content: '';
        width: 8px;
        height: 8px;
        background: linear-gradient(45deg, #2ECC71, #0f73e4);
        border-radius: 50%;
        display: inline-block;
        animation: pulse 1s ease-in-out infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.5); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
    }
`;




// styles for image to docx conversion

export const ActionBarContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    padding: 16px;
    background: white;
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(45deg, #2ECC71, #0f73e4);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(46, 204, 113, 0.2);
    }
`;

export const EditorContainer = styled.div`
    width: 100%;
    margin-top: 16px;

    .edit-message {
        color: #2ECC71;
        margin-bottom: 12px;
        font-size: 0.9rem;
    }
`;

export const StyledTextarea = styled(TextareaAutosize)`
    width: 100%;
    margin-left: -16px;
    padding: 16px;
    border: 2px solid #eee;
    border-radius: 12px;
    font-size: 1rem;
    line-height: 1.5;
    resize: none;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: #2ECC71;
    }
`;

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

export const IconWrapper = styled.div`
    color: #2ECC71;
    filter: drop-shadow(0 0 8px rgba(46, 204, 113, 0.3));

    svg {
        display: block;
    }
`;

export const LoaderText = styled.div`
    font-size: 1.1rem;
    color: #666;
    text-align: center;
    font-weight: 500;
`;




// Floating Action Button styles

export const FABContainer = styled.div`
    position: fixed;
    bottom: 80px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
`;

export const MainButton = styled(motion.button)`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(45deg, #2ECC71, #0f73e4);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const MenuContainer = styled(motion.div)`
    position: absolute;
    bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 12px;
`;

export const MenuItem = styled(motion.button)`
    display: flex;
    align-items: center;
    gap: 8px;
    background: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateX(-4px);
        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.15);
    }
`;

export const IconWrapper2 = styled.span`
    color: #2ECC71;
    font-size: 18px;
    display: flex;
    align-items: center;
`;

export const ButtonLabel = styled.span`
    color: #333;
    font-size: 14px;
    font-weight: 500;
`;