'use client';
import { useEffect, useState } from 'react';
import { getLatestVersion } from '@/utils/data/versions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

const UpdateNotifier = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [latestVersion, setLatestVersion] =
    useState<ReturnType<typeof getLatestVersion>>();
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const storedVersion = localStorage.getItem('appVersion');
    const latest = getLatestVersion();
    setLatestVersion(latest);
    
    // Preload all GIFs
    latest.features.forEach(feature => {
      if (feature.gifUrl) {
        const img = new window.Image(300, 200);
        img.src = feature.gifUrl;
      }
    });

    if (!storedVersion) {
      localStorage.setItem('appVersion', latest.version);
    } else if (storedVersion !== latest.version) {
      setShowUpdate(true);
    }
  }, []);

  const handleUpdate = () => {
    if (!latestVersion) return;
    localStorage.setItem("appVersion", latestVersion.version);
    window.location.reload();
  };

  const handleNext = () => {
    if (!latestVersion) return;
    setDirection(1);
    setCurrentFeatureIndex((prev) =>
      prev < latestVersion.features.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentFeatureIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (!showUpdate || !latestVersion) return null;

  const currentFeature = latestVersion.features[currentFeatureIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <AlertDialog open={showUpdate}>
      <AlertDialogContent className="max-w-lg overflow-hidden">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center flex items-center gap-2 mb-6">
            Update Available <Badge>V{latestVersion.version}</Badge>
          </AlertDialogTitle>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentFeatureIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="mb-4"
            >
              {currentFeature.gifUrl && (
                <div className="flex justify-center mb-2 h-72 items-center">
                  <Image
                    loading="eager"
                    src={currentFeature.gifUrl}
                    alt={currentFeature.title}
                    width={300}
                    height={200}
                    className="rounded-lg max-h-72 w-full shadow-2xl bg-gradient-to-b from-white to-purple-300"
                  />
                </div>
              )}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                <motion.h6
                  className="text-base font-semibold"
                  variants={itemVariants}
                >
                  {currentFeature.title}
                </motion.h6>
                <motion.div className="min-h-[60px]" variants={itemVariants}>
                  <AlertDialogDescription>
                    {currentFeature.description}
                  </AlertDialogDescription>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {latestVersion.features.length > 1 && (
            <div className="flex justify-between items-center">
              <Button
                variant="secondary"
                onClick={handlePrevious}
                disabled={currentFeatureIndex === 0}
                size={"sm"}
                className={`${currentFeatureIndex} === 0 && "opacity-50 cursor-not-allowed"`}
              >
                <MoveLeft size={10} />
              </Button>
              <div className="text-sm text-muted-foreground">
                {currentFeatureIndex + 1} of {latestVersion.features.length}
              </div>
              <Button
                variant="secondary"
                onClick={handleNext}
                size={"sm"}
                disabled={
                  currentFeatureIndex === latestVersion.features.length - 1
                }
              >
                <MoveRight size={10} />
              </Button>
            </div>
          )}
        </AlertDialogHeader>
        <div className="flex justify-end mt-4">
          <AlertDialogAction
            onClick={handleUpdate}
            className="relative bg-black text-white px-6 py-2 w-full rounded-md overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-md"></span>
            <span className="relative z-10 flex items-center gap-2">
              <span>Got it!</span>
            </span>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateNotifier;
