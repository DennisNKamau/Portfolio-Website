import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const KUnity = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        IT Technician
        <span className="text-textGreen tracking-wide">@K-UNITY SACCO</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        March 2022 - Aug 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Provided technical support by troubleshooting hardware.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained and updated systems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Assisted with network management, monitoring infrastructure, and addressingconnectivity issues.
        </li>
      </ul>
    </motion.div>
  );
};

export default KUnity;
