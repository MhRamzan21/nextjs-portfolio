"use client"
import { useTheme } from "next-themes"
import { motion } from "framer-motion";
import { Code, Layers, Zap } from "lucide-react";

const KeyAchievements = () => {
  const { theme, systemTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
      key={currentTheme}
    >
      <motion.div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(167, 139, 250, 0.2)"
              : "rgb(243 232 255)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Code className="h-8 w-8 text-purple-500 dark:text-purple-400 mb-2 transition-colors duration-300" />
        </motion.div>
        <h4 className="font-medium dark:text-white transition-colors duration-300">
          Clean Code
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Crafting maintainable, elegant solutions
        </p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(96, 165, 250, 0.2)"
              : "rgb(219 234 254)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{
            y: [0, -8, 0],
            transition: { duration: 0.6, repeat: 0 },
          }}
        >
          <Layers className="h-8 w-8 text-blue-500 dark:text-blue-400 mb-2 transition-colors duration-300" />
        </motion.div>
        <h4 className="font-medium dark:text-white transition-colors duration-300">
          Component Architecture
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Building scalable, reusable systems
        </p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col items-center text-center cursor-pointer transition-colors duration-300"
        whileHover={{
          scale: 1.05,
          backgroundColor:
            currentTheme === "dark"
              ? "rgba(251, 191, 36, 0.2)"
              : "rgb(254 243 199)",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{
            scale: [1, 1.2, 1],
            transition: { duration: 0.5 },
          }}
        >
          <Zap className="h-8 w-8 text-amber-500 dark:text-amber-400 mb-2 transition-colors duration-300" />
        </motion.div>
        <h4 className="font-medium dark:text-white transition-colors duration-300">
          Performance
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Optimizing for speed and efficiency
        </p>
      </motion.div>
    </div>
  )
}

export {KeyAchievements};