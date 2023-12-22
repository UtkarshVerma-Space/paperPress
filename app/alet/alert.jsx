import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

export default function Alert() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  React.useEffect(() => {
    onOpen(); // Open the modal when the component mounts
  }, []); // Empty dependency array ensures the effect runs once when the component mounts


  return (
    <div className="flex flex-col gap-2">
      
      <Modal 
        isOpen={isOpen} 
        placement={modalPlacement}
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">🚀 Printing Press at Full Throttle! 🚀 <b>High Demand Alert!</b></ModalHeader>
              <ModalBody>
                <p> 
                Our ink barrels are bursting, paper planes are grounded—our print party is on overload! 🎉 
                </p>
                <p>
                📢 Attention: <b>Due to high demand</b>, we can't take more orders right now. Existing orders might take up to 10 days for processing. We appreciate your patience and understanding. Thank you! 🙏
                </p>
              </ModalBody>
              <ModalFooter>

                <Button color="primary" onPress={onClose}>
                  Okay, but I want to Place Urgent Order 👀 🙏🏼
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
