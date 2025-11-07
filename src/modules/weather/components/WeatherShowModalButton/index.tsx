import { MainButton } from "@/modules/common/components";
import { useState, type FC } from "react";
import { WeatherModal } from "../WeatherModal";

interface WeatherShowModalButtonProps {
  latitude: number;
  longitude: number;
}

export const WeatherShowModalButton: FC<WeatherShowModalButtonProps> = ({
  latitude,
  longitude,
}) => {
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <MainButton onClick={() => setIsOpenModal(true)}>Wheather</MainButton>
      <WeatherModal
        open={isModalOpen}
        onClose={() => setIsOpenModal(false)}
        latitude={latitude}
        longitude={longitude}
      />
    </>
  );
};
