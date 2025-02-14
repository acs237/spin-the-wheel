import { motion } from "framer-motion";
import { FC } from "react";

type Args = {
    title: string,
    description: string,
};

const DescriptionTemp: FC<Args> = ({title, description}) => {
    return (
        <div className="flex justify-between items-center max-w-300 mx-auto p-6">
        {/* Text coming from the left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-semibold text-blue-500 w-full p-2"
        >
            {title}
        </motion.div>
  
        {/* Text coming from the right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-semibold text-green-500 w-full p-2"
        >
            {description}
        </motion.div>
      </div>
    )
};

export default DescriptionTemp;