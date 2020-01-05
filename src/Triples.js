import React, { Component } from 'react';
import { ButtonGroup, Button, Input } from 'reactstrap';

class Triples extends Component {

  render() {
    const num = this.props.num == null ? null : parseInt( this.props.num );

    if (!num) return <div/>;

    let participants = [];
    for (let i = 0; i < num; i++) {
      const displayName = String(i + 1);
      participants.push( displayName );
    }

    let T;
    let sts = [];

    if ( num % 6 === 3 ) {
      const t = (num - 3) / 6;
      const z = 2 * t + 1;
      T = (x, y) => x + z * y;

      for (let i = 0; i < z; i++) {
        sts.push( [[i, 0], [i, 1], [i, 2]] );
        for (let j = 0; j < z; j++) {
          if (i === j) continue;
          for (let k = 0; k < 3; k++) {
            sts.push( [[i, k], [j, k], [((t + 1) * (i + j)) % z, (k + 1) % 3]] );
          }
        }
      }

    } else if ( num % 6 === 1 ) {
      const t = (num - 1) / 6;
      const z = 2 * t;
      T = (x, y) => (x !== -1 && y !== -1) ? x + z * y : num - 1;

      const L = (i, j) => {
        const l1 = (i + j) % z;
        return (l1 % 2 === 0) ? l1 / 2 : t + (l1 - 1) / 2;
      };

      for (let i = 0; i < z; i++) {
        if (i < t) {
          sts.push([[i, 0], [i, 1], [i, 2]]);
        } else {
          for (let k = 0; k < 3; k++) {
            sts.push([[-1, -1], [i, k], [i - t, (k + 1) % 3]]);
          }
        }
        for (let j = i + 1; j < z; j++) {
          for (let k = 0; k < 3; k++) {
            sts.push( [[i, k], [j, k], [L(i, j), (k + 1) % 3]] );
          }
        }
      }
    }

    const SN = (n1, n2) => n1 - n2;
    const ST = (t1, t2) => t1[0] !== t2[0] ? t1[0] - t2[0] : t1[1] !== t2[1] ? t1[1] - t2[1] : t1[2] - t2[2];

    const triples = Array.from(new Set(sts.map(ps=>ps.map(p=>T(...p)).sort(SN).join('-'))))
      .map(s=>s.split('-').map(s=>parseInt(s))).sort(ST);

    return (
      <div>
        <br/>

        <h5>Triples for { num } participants</h5>

        <div className="flex-wrap">
          { participants.map( participant =>
            <Button>{ participant }</Button>
          )}
        </div>

        <br/>

        { triples.map( triple =>
          <ButtonGroup className="mr-2">
            { triple.map( pIndex =>
              <Button>{ participants[pIndex] }</Button>
            )}
          </ButtonGroup>
        )}

      </div>
    );
  }

}

export default Triples;