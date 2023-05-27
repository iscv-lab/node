import { Segmentation } from '~models/poc/Segmentation';
import { caculate } from './pocOperationTimeSlot';

export const handleCalculatedPOCSize = async ({
  segmentation,
  openingHour,
  closingHour,
  totalConsumers = 0,
  nonBeerConsumers = 0,
  activeVIPRooms = 0,
}: {
  segmentation: number;
  openingHour: string;
  closingHour: string;
  totalConsumers?: number;
  nonBeerConsumers?: number;
  activeVIPRooms?: number;
}) => {
  const pocOperationTimeSlot = caculate(openingHour, closingHour);
  const segmentationData = await Segmentation.findOne({
    value: segmentation,
  });
  if (!segmentationData) {
    throw 'Không thể tìm thấy kênh quán.';
  }

  const { averageConsumersPerVIPRoom, averageBottlePerConsumer } = segmentationData!;
  const averageTurnPerDay = segmentationData![pocOperationTimeSlot];
  const caculatedPOCSize =
    ((totalConsumers - nonBeerConsumers + activeVIPRooms * averageConsumersPerVIPRoom!) *
      averageTurnPerDay! *
      averageBottlePerConsumer! *
      30) /
    24;
  return caculatedPOCSize;
};
