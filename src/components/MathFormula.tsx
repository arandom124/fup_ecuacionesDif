
import { FC } from "react";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathFormulaProps {
  formula: string;
  block?: boolean;
  className?: string;
}

const MathFormula: FC<MathFormulaProps> = ({ formula, block = false, className = "" }) => {
  return block ? (
    <div className={`math-formula ${className}`}>
      <BlockMath math={formula} />
    </div>
  ) : (
    <InlineMath math={formula} />
  );
};

export default MathFormula;
