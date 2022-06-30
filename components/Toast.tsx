import { useToast } from "@chakra-ui/react";

export default function Toast(
  title,
  description,
  status,
  duration,
  isClosable
) {
  const toast = useToast();
  toast({
    title: title,
    description: description,
    status: status,
    duration: duration,
    isClosable: isClosable
  });
}

export function ErrorToast(title) {
  Toast(
    `An error occured on $[title]`,
    "Please try again",
    "error",
    8000,
    false
  );
}
