import { useState } from "react";
import { Link } from "react-router-dom";
import "./LootReduvia.scss";
import useItems from "../../../tools/useItems";

function LootReduvia() {
  const [isShown, setIsShown] = useState(false);
  const { weaponStuff } = useItems();

  return (
    <div className="loot-background">
      <div
        tabIndex={0}
        role="button"
        onMouseLeave={() => setIsShown(false) || setIsShown(false)}
        className="loots"
      >
        <h1>Loots</h1>
        <section className="loot-choice">
          <div className="left-loot">
            <Link to="/boss-fight" className="choice-loot">
              <p>{weaponStuff[2]?.name}</p>
            </Link>
            {/* rajouter le onClick */}
            <div
              className="left-img"
              tabIndex={0}
              role="button"
              onClick={() => setIsShown(true)}
              onKeyDown={() => setIsShown(true)}
            >
              <img
                className="left-item-img"
                src={weaponStuff[2]?.image}
                alt={weaponStuff[2]?.name}
              />
            </div>
          </div>
          {isShown && (
            <div className="weapon-stats-left">
              <ul>
                <p>{weaponStuff[2]?.name}</p>
                <li>attack 🗡️ {weaponStuff[2]?.attack[5].amount}</li>
                <li>{weaponStuff[2]?.description}</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default LootReduvia;