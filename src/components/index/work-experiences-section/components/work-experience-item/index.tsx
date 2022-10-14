import { FC } from "react";
import { Box, Typography } from "@mui/material";
import {
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { IWorkExperienceObj } from "../..";

interface IWorkExperienceItem {
  mdUp: boolean;
  experience: IWorkExperienceObj;
}

const WorkExperienceItem: FC<IWorkExperienceItem> = (props) => {
  const { experience, mdUp } = props;
  return (
    <>
      {mdUp && (
        <TimelineOppositeContent
          color="text.secondary"
          sx={{
            pt: "2rem",
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              color: "white",
            }}
          >
            {experience.name}
            <Box
              component="span"
              sx={{
                border: (theme) => `3px solid ${theme.palette.grey["400"]}`,
                borderRadius: "50%",
                height: 0,
                display: "inline-block",
                mx: "1rem",
              }}
            />
            {experience.role}
          </Typography>
          <Typography
            component="h3"
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              fontWeight: "light",
              mt: "1rem",
            }}
          >
            {experience.date}
          </Typography>
        </TimelineOppositeContent>
      )}

      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          pt: "3rem",
        }}
      >
        {!mdUp && (
          <>
            <Typography
              component="h3"
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                color: "white",
              }}
            >
              {experience.name}
              <Box
                component="span"
                sx={{
                  border: (theme) => `3px solid ${theme.palette.grey["400"]}`,
                  borderRadius: "50%",
                  height: 0,
                  display: "inline-block",
                  mx: "1rem",
                }}
              />
              {experience.role}
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                fontWeight: "light",
                mt: "1rem",
                color: "text.secondary",
              }}
            >
              {experience.date}
            </Typography>
          </>
        )}
        {experience.desc.map((desc, indexDesc) => {
          return (
            <Typography
              component="h4"
              variant="h6"
              key={indexDesc}
              mt="1rem"
              fontWeight="300"
              color="text.secondary"
            >
              {"- " + desc}
            </Typography>
          );
        })}
      </TimelineContent>
    </>
  );
};

export default WorkExperienceItem;
