import { FaRegImage, FaHome, FaUser, FaFileAlt } from "react-icons/fa";
import { BsArrowLeftRight, BsTranslate, BsSpellcheck } from "react-icons/bs";
import { BsFiletypeDocx } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";
import { RiAiGenerate } from "react-icons/ri";
import './toolcard.css';

const ToolCard = ({ icon, title, onClick }) => {
  return (
    <div className="tool-card" onClick={onClick}>
      <div className="tool-card__icon">{icon}</div>
      <div className="tool-card__title">{title}</div>
    </div>
  );
};

export const ToolGrid = () => {
  const tools = [
    {
      id: 1,
      icon: <><CiImageOn /> → <BsFiletypeDocx /></>,
      title: "Image to DOCX Converter",
      className: "tool-wide"
    },
    {
      id: 2,
      icon: <><FaRegFilePdf /> <BsArrowLeftRight style={{width: '17px'}}/> <BsFiletypeDocx /></>,
      title: "PDF ↔ DOCX Converter",
      className: "tool-normal"
    },
    {
      id: 3,
      icon: <BsTranslate />,
      title: "Translate documents",
      className: "tool-long"
    },
    {
      id: 4,
      icon: <RiAiGenerate />,
      title: "AI-Powered Document Simplifier",
      className: "tool-long"
    },
    {
      id: 5,
      icon: <BsSpellcheck />,
      title: "Grammar fixer",
      className: "tool-normal"
    }
  ];

  return (
    <div className="tool-grid">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          icon={tool.icon}
          title={tool.title}
          className={tool.className}
          onClick={() => console.log(`Clicked ${tool.title}`)}
        />
      ))}
    </div>
  );
};

export default ToolGrid;