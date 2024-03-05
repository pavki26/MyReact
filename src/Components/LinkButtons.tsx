import "./LinkButtons.css";

interface LinkButtonProps
{
    url: string;
    Label: string;
}

const LinkButtons = ({url, Label}: LinkButtonProps) => {
  return (
    <div>
      <a className="Link_button"
        href={url} target="_blank">{Label}
      </a>  
    </div>
  );
};

export default LinkButtons;
