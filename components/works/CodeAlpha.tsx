import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CodeAlpha = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend developer intern
        <span className="text-textGreen tracking-wide">CodeAlpha</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sept 2024 - Oct 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, Html, CSS,
          React and Netlify
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of engineers, designers, and clients on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default CodeAlpha;
