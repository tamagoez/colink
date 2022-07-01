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
  Toast(`An error occured on ${title}`, info, "error", 8000, false);
}
