import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();

export default function Toast(
  title,
  description,
  status,
  duration,
  isClosable
) {
  // const toast = useToast();
  toast({
    title: title,
    description: description,
    status: status,
    duration: duration,
    isClosable: isClosable
  });
}

export function ErrorToast(title, info) {
  Toast(`An error occured on ${title}`, info, "error", 6000, false);
}

export function SuccessToast(title, info) {
  Toast(`${title} succeed`, info, "success", 6000, true);
}
