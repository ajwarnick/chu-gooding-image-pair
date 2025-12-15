import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InnerBlocks, useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption} from '@wordpress/components';
 
import './editor.scss';
import { Fragment } from 'react/jsx-runtime';

export default function Edit( { attributes, setAttributes } ) {
	const { distribution } = attributes;

	const classNameToApply = `project__imagePair__distribution-${distribution}`;

	const blockProps = useBlockProps({
        className: distribution ? classNameToApply : '', // Apply class conditionally
    });

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["core/image"],
		template: [["core/image", { url: '', size: 'full', alignment: 'full' } ], ["core/image", { url: '', size: 'full', alignment: 'full' } ]],
		templateLock: "all",
	});

	function setDistribution(value){
		setAttributes({ distribution: value });
	}

	return (
		<div {...blockProps} >
			<InspectorControls>
				<PanelBody title={ 'Column Ratio' } >
					<PanelRow>
						<ToggleGroupControl
							label="Distribution"
							value={distribution}
							onChange={setDistribution}
						>
							<ToggleGroupControlOption value="3" label="1/3" />
							<ToggleGroupControlOption value="4" label="1/2" />
							<ToggleGroupControlOption value="6" label="1/1" />
							<ToggleGroupControlOption value="8" label="2/1" />
							<ToggleGroupControlOption value="9" label="3/1" />
						</ToggleGroupControl>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<Fragment {...innerBlocksProps}></Fragment>
        </div>
	);
}
