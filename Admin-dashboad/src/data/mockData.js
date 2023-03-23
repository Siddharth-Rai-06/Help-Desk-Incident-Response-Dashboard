import { tokens } from "../theme";


export const mockBarData = [
  {
    Month: "Mar",
    "Triggered": 101,
    "TriggeredColor": "hsl(229, 70%, 50%)",
    Acknowledged: 87,
    AcknowledgedColor: "hsl(296, 70%, 50%)",
    Resolved: 69,
    ResolvedColor: "hsl(97, 70%, 50%)"
  },
  {
    Month: "Apr",
    "Triggered": 75,
    "TriggeredColor": "hsl(307, 70%, 50%)",
    Acknowledged: 65,
    AcknowledgedColor: "hsl(111, 70%, 50%)",
    Resolved: 75,
    ResolvedColor: "hsl(273, 70%, 50%)"
  },
  {
    Month: "May",
    "Triggered": 87,
    "TriggeredColor": "hsl(72, 70%, 50%)",
    Acknowledged: 81,
    AcknowledgedColor: "hsl(96, 70%, 50%)",
    Resolved: 66,
    ResolvedColor: "hsl(106, 70%, 50%)"
  },
  {
    Month: "Jun",
    "Triggered": 91,
    "TriggeredColor": "hsl(257, 70%, 50%)",
    Acknowledged: 61,
    AcknowledgedColor: "hsl(326, 70%, 50%)",
    Resolved: 99,
    ResolvedColor: "hsl(110, 70%, 50%)"
  },
  {
    Month: "Jul",
    "Triggered": 105,
    "TriggeredColor": "hsl(190, 70%, 50%)",
    Acknowledged: 99,
    AcknowledgedColor: "hsl(325, 70%, 50%)",
    Resolved: 75,
    ResolvedColor: "hsl(54, 70%, 50%)"
  },
  {
    Month: "Aug",
    "Triggered": 65,
    "TriggeredColor": "hsl(208, 70%, 50%)",
    Acknowledged: 101,
    AcknowledgedColor: "hsl(334, 70%, 50%)",
    Resolved: 99,
    ResolvedColor: "hsl(182, 70%, 50%)"
  },
  {
    Month: "Sep",
    "Triggered": 80,
    "TriggeredColor": "hsl(87, 70%, 50%)",
    Acknowledged: 47,
    AcknowledgedColor: "hsl(141, 70%, 50%)",
    Resolved: 158,
    ResolvedColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
  {
    Month: "Oct",
    "Triggered": 79,
    "TriggeredColor": "hsl(229, 70%, 50%)",
    Acknowledged: 97,
    AcknowledgedColor: "hsl(296, 70%, 50%)",
    Resolved: 83,
    ResolvedColor: "hsl(97, 70%, 50%)"
  },
  {
    Month: "Nov",
    "Triggered": 81,
    "TriggeredColor": "hsl(229, 70%, 50%)",
    Acknowledged: 75,
    AcknowledgedColor: "hsl(296, 70%, 50%)",
    Resolved: 88,
    ResolvedColor: "hsl(97, 70%, 50%)"
  },
  {
    Month: "Dec",
    "Triggered": 99,
    "TriggeredColor": "hsl(229, 70%, 50%)",
    Acknowledged: 103,
    AcknowledgedColor: "hsl(296, 70%, 50%)",
    Resolved: 76,
    ResolvedColor: "hsl(97, 70%, 50%)"
  },
  {
    Month: "Jan",
    "Triggered": 72,
    "TriggeredColor": "hsl(229, 70%, 50%)",
    Acknowledged: 105,
    AcknowledgedColor: "hsl(296, 70%, 50%)",
    Resolved: 72,
    ResolvedColor: "hsl(97, 70%, 50%)",
  },
  {
    Month: "Feb",
    "Triggered": 101,
    "TriggeredColor": "hsl(229, 70%, 50%)",
    Acknowledged: 79,
    AcknowledgedColor: "hsl(296, 70%, 50%)",
    Resolved: 105,
    ResolvedColor: "hsl(97, 70%, 50%)"
  },
];


export const mockLineData = [
  {
    id: "Triggered",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Mar",
        y: 101,
      },
      {
        x: "Apr",
        y: 75,
      },
      {
        x: "May",
        y: 36,
      },
      {
        x: "Jun",
        y: 216,
      },
      {
        x: "Jul",
        y: 35,
      },
      {
        x: "Aug",
        y: 236,
      },
      {
        x: "Sep",
        y: 88,
      },
      {
        x: "Oct",
        y: 232,
      },
      {
        x: "Nov",
        y: 281,
      },
      {
        x: "Dec",
        y: 1,
      },
      {
        x: "Jan",
        y: 35,
      },
      {
        x: "Feb",
        y: 14,
      },
    ],
  },
  {
    id: "Acknowledged",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Mar",
        y: 99,
      },
      {
        x: "Apr",
        y: 190,
      },
      {
        x: "May",
        y: 270,
      },
      {
        x: "Jun",
        y: 9,
      },
      {
        x: "Jul",
        y: 75,
      },
      {
        x: "Aug",
        y: 175,
      },
      {
        x: "Sep",
        y: 33,
      },
      {
        x: "Oct",
        y: 189,
      },
      {
        x: "Nov",
        y: 97,
      },
      {
        x: "Dec",
        y: 87,
      },
      {
        x: "Jan",
        y: 299,
      },
      {
        x: "Feb",
        y: 251,
      },
    ],
  },
  {
    id: "Resolved",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Mar",
        y: 191,
      },
      {
        x: "Apr",
        y: 136,
      },
      {
        x: "May",
        y: 91,
      },
      {
        x: "Jun",
        y: 190,
      },
      {
        x: "Jul",
        y: 211,
      },
      {
        x: "Aug",
        y: 152,
      },
      {
        x: "Sep",
        y: 189,
      },
      {
        x: "Oct",
        y: 152,
      },
      {
        x: "Nov",
        y: 8,
      },
      {
        x: "Dec",
        y: 197,
      },
      {
        x: "Jan",
        y: 107,
      },
      {
        x: "Feb",
        y: 170,
      },
    ],
  },
];
