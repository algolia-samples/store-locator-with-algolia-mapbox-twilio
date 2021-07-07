import React, {useState, Fragment, Component} from "react";
import {addDays, addMinutes, format, formatISO, isToday} from 'date-fns'
import {AsYouType, CountryCode, parsePhoneNumber} from "libphonenumber-js";
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline';
import {ReactComponent as TwilioBadge} from "../../assets/twilio-badge-red.svg";

interface IBopisProps {
  store: string | null
  isOpen: boolean
  onClose: () => void
}

interface IBopisState {
  isLoading: boolean,
  customer: string,
  time: string,
  phoneNumber: string,
  phoneCountry: CountryCode
}

class BopisSelector extends Component<IBopisProps, IBopisState> {

  state = {
    isLoading: false,
    customer: '',
    time: '',
    phoneNumber: '',
    phoneCountry: 'FR' as CountryCode,
  };

  constructor(props: IBopisProps) {
    super(props);
    this.PhoneNumberInput = this.PhoneNumberInput.bind(this);
    this.FirstnameInput = this.FirstnameInput.bind(this);
    this.generatePickUpOptions = this.generatePickUpOptions.bind(this);
  }


  generatePickUpOptions() {
    const pickupOptions = []

    const date = new Date();

    for (let i = 1; i <= 8; i += 1) {
      let pickupDate = addMinutes(date, i * 30);
      if (isToday(pickupDate)) {
        pickupOptions.push(<option value={format(pickupDate, 'dd-MM-yyyy::HH:mm')} key={formatISO(pickupDate)}>Today
          at {format(pickupDate, 'HH:mm')}</option>)
      } else {
        addDays(pickupDate, 1);
        pickupOptions.push(<option value={formatISO(pickupDate)} key={formatISO(pickupDate)}>Tomorrow
          at {format(pickupDate, 'HH:00')}</option>)
      }
    }
    return pickupOptions
  }


  FirstnameInput() {
    return (
      <div>
        <div className="mt-1">
          <input
            type="text"
            onChange={e => this.setState({customer: e.target.value})}
            value={this.state.customer}
            name="firstname"
            id="firstname"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Bruce"
          />
        </div>
      </div>
    )
  }

  PhoneNumberInput() {
    return (
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              defaultValue={this.state.phoneCountry}
              onChange={(e) => {
                this.setState({phoneCountry: e.target.value as CountryCode});}}
              name="country"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>US</option>
              <option>CA</option>
              <option>FR</option>
            </select>
          </div>
          <input
            value={this.state.phoneNumber}
            type="text"
            name="phone-number"
            id="phone-number"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
            onChange={e => {
              this.setState({phoneNumber: e.target.value});
            }}
          />
        </div>
      </div>
    )
  }
  PickupTime() {

    const options = this.generatePickUpOptions()

    return (
      <div>
        <select
          id="pickuptime"
          name="pickuptime"
          onChange={e => {
            this.setState({time: e.target.value});
          }}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          placeholder={'Choose your pickup timeframe'}
          value={this.state.time}
        >
          {options.map(o => o)}
        </select>
      </div>
    )

  }


  render() {
    return <Transition.Root show={this.props.isOpen} as={Fragment}>
      <Dialog as="div" static className="absolute z-50 inset-0 overflow-hidden" open={this.props.isOpen} onClose={this.props.onClose}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0"/>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md z-9999">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Pickup your order at {this.props.store}</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => this.props.onClose()}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="h-full absolute inset-0 px-4 sm:px-6">
                      <div className="h-full flex flex-col items-center justify-between" aria-hidden="true">
                        <div className={
                          'w-full flex flex-col gap-4'
                        }>
                          {this.FirstnameInput()}
                          {this.PhoneNumberInput()}
                          {this.PickupTime()}
                          <button
                            type="button"
                            className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500w w-full"
                          >
                            Place my order
                          </button>
                        </div>
                        <TwilioBadge className={'w-32 h-auto'}/>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  }





}

export default BopisSelector