import React, { useEffect, useState } from "react";
import { Image, ImageSourcePropType, SafeAreaView } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useUserList } from "../../../react-query/hooks/user-list";
import { addUserImpression } from "../../../react-query/api/user-impression";
import CarouselList from "../../../components/organism/carousel-list";
import { styles } from "./styles";
import { getDataFromAsyncStorage } from "../../../utilities/utils/async-storage";
import { IMAGES } from "../../../components/constants/images";

const Home = (): React.JSX.Element => {
  const queryClient = useQueryClient();
  const mutationKey = ["userImpression"];
  const [previousSlide, setPreviousSlide] = useState(0);
  const [displayedImage, setDisplayedImage] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (showImage) {
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 1000); // Set timeout for 1 second
      return () => clearTimeout(timer); // Clean up timer on component unmount
    }
  }, [showImage]);

  const { data, refetch } = useUserList();
  const mutation = useMutation({
    mutationKey,
    mutationFn: addUserImpression,
  });

  const handleFavorite = async (
    like: boolean,
    id: number,
    ignoreFilter?: boolean
  ) => {
    const userId = await getDataFromAsyncStorage("uuid");

    const bodyFormData = {
      user_id: id,
      user_like_id: userId,
      is_like: like ? 1 : 0,
    };

    await mutation.mutateAsync(bodyFormData);
    if (!ignoreFilter) {
      const newData = data.filter((record: any) => record.id !== id);
      queryClient.setQueryData(["userList"], newData);
    }
  };

  const onSnapToItem = (index: number) => {
    const { id } = data[previousSlide] || {};

    if (index !== previousSlide) {
      const isLiked = index > previousSlide;
      setDisplayedImage(isLiked ? IMAGES.LIKE : IMAGES.NOPE);
      handleFavorite(isLiked, id, true);
      setShowImage(true);
      setPreviousSlide(index);
    }
  };

  const handleRefresh = () => {
    refetch();
  };
  return (
    <SafeAreaView style={styles.container}>
      <CarouselList
        data={data}
        handleFavorite={handleFavorite}
        onSnapToItem={onSnapToItem}
        handleRefresh={handleRefresh}
      />
      {showImage && (
        <Image source={displayedImage} style={styles.actionImage} />
      )}
    </SafeAreaView>
  );
};

export default Home;
