import './Style.css';

function Calculator() {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item-input">
          <input type="text" className="value-input" id="value-input" placeholder="0" />
        </div>
        <div className="grid-item" id="item-Ac">Ac</div>
        <div className="grid-item" id="item- pds">+/-</div>
        <div className="grid-item" id="item-mod">%</div>
        <div className="grid-item grid-item-color" id="item-div">/</div>
        <div className="grid-item" id="item-seven">7</div>
        <div className="grid-item" id="item-eight">8</div>
        <div className="grid-item" id="item-nine">9</div>
        <div className="grid-item grid-item-color" id="item-times">x</div>
        <div className="grid-item" id="item-four">4</div>
        <div className="grid-item" id="item-five">5</div>
        <div className="grid-item" id="item-six">6</div>
        <div className="grid-item grid-item-color" id="item-sub">-</div>
        <div className="grid-item" id="item-one">1</div>
        <div className="grid-item" id="item-two">2</div>
        <div className="grid-item" id="item-three">3</div>
        <div className="grid-item grid-item-color" id="item-add">+</div>
        <div className="grid-item-zero grid-item" id="item-zero">0</div>
        <div className="grid-item" id="item-dot">.</div>
        <div className="grid-item grid-item-color" id="item-equal">=</div>
      </div>

    </div>
  );
}

export default Calculator;
