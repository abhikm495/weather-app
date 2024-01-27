import "./Header.css";
const Header = ({ handleSubmit, error, hanldeUnit, unitButton }) => {
  return (
    <div className="section section_inputs">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter City" />
        <button>Search</button>
      </form>
      {error && <span className="error-message">{error}</span>}
      <button ref={unitButton} className="unit" onClick={hanldeUnit}>
        °C
      </button>
    </div>
  );
};
export default Header;
