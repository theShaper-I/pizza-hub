import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFilterGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фільтрація' size='sm' className='mb-5 font-bold' />
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Мясна' value='1' />
        <FilterCheckbox text='Веган' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена від та до</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type='number' placeholder='1000' min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFilterGroup
        title='Інтгрідієнти'
        className='mt-5'
        limit={5}
        defaultItems={[
          {
            text: "Сирний соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Часник",
            value: "3",
          },
          {
            text: "Солені огірки",
            value: "4",
          },
          {
            text: "Червоний лук",
            value: "5",
          },
          {
            text: "Помідори",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сирний соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Часник",
            value: "3",
          },
          {
            text: "Солені огірки",
            value: "4",
          },
          {
            text: "Червоний лук",
            value: "5",
          },
          {
            text: "Помідори",
            value: "6",
          },
          {
            text: "Сирний соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Часник",
            value: "3",
          },
          {
            text: "Солені огірки",
            value: "4",
          },
          {
            text: "Червоний лук",
            value: "5",
          },
          {
            text: "Помідори",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
