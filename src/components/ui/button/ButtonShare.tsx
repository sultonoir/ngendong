"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
import { BiShare } from "react-icons/bi";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

type Props = {
  title: string;
  images: string;
  city: string | undefined;
  beds: number;
  guest: number;
  bedroom: number;
};

const ButtonShare = ({ title, images, city, bedroom, beds, guest }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const url = window.location.href;
  return (
    <>
      <Button
        onPress={onOpen}
        startContent={<BiShare className="size-8" />}
        variant="light"
      >
        Share
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Share this place
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-2">
                <Image
                  src={images}
                  alt={title}
                  width={100}
                  height={100}
                  priority
                  className="aspect-square flex-shrink-0 rounded-lg object-cover"
                />
                <div className="flex items-center gap-1">
                  <span>{city}</span>
                  <span>.</span>
                  <span className="inline-flex">{guest} guest </span>
                  <span>.</span>
                  <span>{beds} beds</span>
                  <span>.</span>
                  <span>{bedroom} bedrooms</span>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="justify-start">
            <div className="grid w-full grid-cols-2 gap-4">
              <EmailShareButton
                url={url}
                className="share flex w-full items-center gap-4 rounded-lg bg-content1"
                style={{ border: "2px solid #52525b", padding: "8px 10px" }}
              >
                <EmailIcon className="size-8 rounded-full" />
                <span className="w-full flex-1 text-start">Copy url</span>
              </EmailShareButton>
              <FacebookShareButton
                url={url}
                className="share flex w-full items-center gap-4 rounded-lg bg-content1"
                style={{ border: "2px solid #52525b", padding: "8px 10px" }}
              >
                <FacebookIcon className="size-8 rounded-full" />
                <span className="w-full flex-1 text-start">Facebook</span>
              </FacebookShareButton>

              <LineShareButton
                url={url}
                className="share flex w-full items-center gap-4 rounded-lg bg-content1"
                style={{ border: "2px solid #52525b", padding: "8px 10px" }}
              >
                <LineIcon className="size-8 rounded-full" />
                <span className="w-full flex-1 text-start">Line</span>
              </LineShareButton>
              <TelegramShareButton
                url={url}
                className="share flex w-full items-center gap-4 rounded-lg bg-content1"
                style={{ border: "2px solid #52525b", padding: "8px 10px" }}
              >
                <TelegramIcon className="size-8 rounded-full" />
                <span className="w-full flex-1 text-start">Telegram</span>
              </TelegramShareButton>
              <TwitterShareButton
                url={url}
                className="share flex w-full items-center gap-4 rounded-lg bg-content1"
                style={{ border: "2px solid #52525b", padding: "8px 10px" }}
              >
                <TwitterIcon className="size-8 rounded-full" />
                <span className="w-full flex-1 text-start">Twitter</span>
              </TwitterShareButton>
              <WhatsappShareButton
                url={url}
                className="share flex w-full items-center gap-4 rounded-lg bg-content1"
                style={{ border: "2px solid #52525b", padding: "8px 10px" }}
              >
                <WhatsappIcon className="size-8 rounded-full" />
                <span className="w-full flex-1 text-start">Whatsapp</span>
              </WhatsappShareButton>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ButtonShare;
