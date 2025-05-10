import TextareaAutosize from 'react-textarea-autosize';
import { EditorContainer, StyledTextarea } from '../../assets/style/styles';

export const TextEditor = ({ text, onChange }) => {
    return (
        <EditorContainer>
            <p className="edit-message">
                ✨ You can now edit the extracted text if needed
            </p>
            <StyledTextarea
                value={text}
                onChange={(e) => onChange(e.target.value)}
                minRows={10}
                placeholder="Extracted text will appear here..."
            />
        </EditorContainer>
    );
};