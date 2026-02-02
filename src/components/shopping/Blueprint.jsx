import React from 'react';
import './Blueprint.css';

const Blueprint = () => {
  const specifications = [
    {
      label: 'Dimensions',
      value: 'H: 42cm / W: 38cm / D: 10cm'
    },
    {
      label: 'Handle Drop',
      value: '28cm (Fits over thick coats)'
    },
    {
      label: 'Material',
      value: '100% Raw Cotton Canvas (Unbleached)'
    },
    {
      label: 'Origin',
      value: 'Designed in Copenhagen, Denmark'
    },
    {
      label: 'Care',
      value: 'Spot clean only. Do not machine wash.'
    }
  ];

  return (
    <section className="blueprint">
      <div className="blueprint__container">
        <h2 className="blueprint__title">SPECIFICATIONS</h2>
        
        <table className="blueprint__table">
          <tbody>
            {specifications.map((spec, index) => (
              <tr key={index} className="blueprint__row">
                <td className="blueprint__label">{spec.label}</td>
                <td className="blueprint__value">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Blueprint;